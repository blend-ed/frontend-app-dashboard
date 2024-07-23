import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom matchers
import ModalExample from './ModalExample';

jest.mock('@openedx/paragon', () => ({
  Modal: jest.fn(({ open, title, body, buttons, onClose }) => (
    open ? (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        {buttons}
        <button onClick={onClose}>Close</button>
      </div>
    ) : null
  )),
  Button: jest.fn(({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
  )),
}));

describe('ModalExample', () => {
  const setModalState = jest.fn();
  const students = ['Student1', 'Student2'];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the modal when modalState is true', () => {
    render(<ModalExample modalState={true} setModalState={setModalState} students={students.length} />);
    expect(screen.getByText(/unEnroll students./i)).toBeInTheDocument();
    expect(screen.getByText(/Are you sure you want to bulk unenroll/i)).toBeInTheDocument();
  });

  test('does not render the modal when modalState is false', () => {
    render(<ModalExample modalState={false} setModalState={setModalState} students={students.length} />);
    expect(screen.queryByText(/unEnroll students./i)).not.toBeInTheDocument();
  });

  test('calls setModalState with false when close button is clicked', () => {
    render(<ModalExample modalState={true} setModalState={setModalState} students={students.length} />);
    fireEvent.click(screen.getByText(/Close/i));
    expect(setModalState).toHaveBeenCalledWith(false);
  });

  test('calls console.log when Confirm Unenroll button is clicked', () => {
    console.log = jest.fn();
    render(<ModalExample modalState={true} setModalState={setModalState} students={students.length} />);
    fireEvent.click(screen.getByText(/Confirm Unenroll/i));
    expect(console.log).toHaveBeenCalledWith('students unenrolled');
  });

  test('renders the correct number of students', () => {
    render(<ModalExample modalState={true} setModalState={setModalState} students={students.length} />);
    expect(screen.getByText(new RegExp(`Are you sure you want to bulk unenroll ${students.length}`,'i'))).toBeInTheDocument();
  });
});