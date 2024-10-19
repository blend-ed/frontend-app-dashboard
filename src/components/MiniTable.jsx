import { Button, InlineDropdown, Search } from '@blend-ed/blendx-ui';
import React, { useEffect, useState } from 'react';
import { Table } from '@blend-ed/blendx-ui';
import classNames from 'classnames';

const MiniTable = ({
  data,
  columns,
  sortBy,
  setSortBy,
  link,
  title,
  hideHeader,
  hasFixedColumnWidths,
  className,
  size = "md"
}) => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    console.log('Search value:', search); // Add this line to check the search value
    const filtered = data.filter((item) => {
      return Object.values(item).some((value) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(search.toLowerCase());
        } else if (typeof value === 'number') {
          return value.toString().includes(search);
        }
        return false;
      });
    });
    setFilteredData(filtered);
  }, [search, data]);

  return (
    <div className={classNames('mini-table-container', `mini-table-${size}`, className)}>
      <div className="mini-table__card">
        <div className="mini-table__header">
          <div className="mini-table__left">
            <div className="mini-table__title">{title}</div>
            {/* Search component with working onChange handler */}
            <Search placeholder="Search..." onChange={(value) => setSearch(value)} />
          </div>
          <div className="mini-table__right">
            <InlineDropdown border onSelect={(e) => setSortBy(e.value)} selected={sortBy}>
              {columns.filter(column => column.sortable).map(column => (
                <InlineDropdown.Item
                  key={column.key}
                  icon="sort"
                  iconType="desc"
                  label={column.label}
                  value={column.key}
                />
              ))}
            </InlineDropdown>
          </div>
        </div>
        <div className="mini-table__body">
          {/* Displaying filtered data */}
          <Table
            data={filteredData}  // Ensure filteredData is passed here
            columns={columns}
            tableSortable
            defaultSortedColumn={sortBy}
            defaultSortDirection="asc"
            showRows={5}
            hideHeader={hideHeader}
            hasFixedColumnWidths={hasFixedColumnWidths}
          />
        </div>
      </div>
      {link && <div className="mini-table__footer">
        <Button
          size="xs"
          variant="link-gray"
          href={link}
          className="mini-table__footer-link"
        >
          See all
        </Button>
      </div>}
    </div>
  );
};

export default MiniTable;
