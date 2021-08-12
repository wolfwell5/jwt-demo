import React from 'react';
import { useFilters, useTable, usePagination } from 'react-table';
import styles from './Table.css';

function Table({ columns, data, children }) {
  const defaultColumn = {
    // ToDo: Find a way to not pass any defaultFilter to react-table
    Filter: () => <React.Fragment />,
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    nextPage,
    previousPage,
    page,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0, pageSize: 20 },
    },
    useFilters,
    usePagination
  );

  const getStartResultIndex = () => pageIndex * pageSize;
  const getEndResultIndex = () => {
    const index = getStartResultIndex() + pageSize;
    return index < rows.length ? index : rows.length;
  };

  return (
    <React.Fragment>
      <div className={styles.pagination}>
        {children}
        <div className={styles.paginationButtons}>
          <span>
            <strong>{`${getStartResultIndex() + 1} - ${getEndResultIndex()}`}</strong>
            {` von`} <strong>{rows.length}</strong> Ergebnisse
          </span>
          <div className={styles.searchResultPagination}>
            <button
              type="button"
              id="goToPreviousPage"
              onClick={previousPage}
              className={`${styles.angleLeft} ${styles.arrowButtons} icon-arrow-left`}
              disabled={!canPreviousPage}
            />
            <button
              type="button"
              id="goToNextPage"
              onClick={nextPage}
              className={`${styles.angleRight} ${styles.arrowButtons} icon-arrow`}
              disabled={!canNextPage}
            />
          </div>
        </div>
      </div>
      <table className={styles.reactTable} {...getTableProps()}>
        <thead className={styles.tableHead}>
          {headerGroups.map(headerGroup => (
            <tr className={styles.tableRow} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th width={column.width} className={styles.tableHeaderCell} {...column.getHeaderProps()}>
                  {column.filterable ? column.render('Filter') : column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {rows.length > 0 && (
          <tbody className={styles.tableBody} {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row);
              return (
                <tr className={styles.tableRow} {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td width={cell.column.width} className={styles.tableCell} {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {rows.length === 0 && <div className={styles.noRowsFoundText}>no data ....</div>}
    </React.Fragment>
  );
}

export default Table;
