var classnames = require('classnames');
var React = require('react');
var sortBy = require('lodash.sortby');

var types = React.PropTypes;

var TableHeader = React.createClass({
  handleClick() {
    if (this.props.sortable) {
      this.props.onSortableTableHeaderClick(this);
    }
  },

  render() {
    var sortClass;

    if (this.props.sortable) {
      if (this.props.sortState.column !== this.props.name) {
        sortClass = 'sortable sorted-none';
      } else if (this.props.sortState.order === 'asc') {
        sortClass = 'sortable sorted-asc';
      } else {
        sortClass = 'sortable sorted-desc';
      }
    }

    return (
      <th className={sortClass} onClick={this.handleClick}>
        {this.props.children}
      </th>
    );
  }
});

const ALIGNMENT = {
  left: 'txt-l',
  center: 'txt-c',
  right: 'txt-r'
};
var TableRow = React.createClass({
  render() {
    var tableCells = this.props.columnNames.map(function(columnName, columnIndex) {
      var columnAlignment = this.props.alignment[columnIndex];
      return (
        <td key={columnName} className={classnames(ALIGNMENT[columnAlignment])}>{this.props.data[columnName]}</td>
      );
    }, this);

    return <tr>{tableCells}</tr>;
  }
});

var SortableTable = React.createClass({
  propTypes: {
    classes: types.arrayOf(types.string),
    columns: types.arrayOf(types.shape({
      name: types.string.isRequired,
      title: types.string.isRequired,
      align: types.oneOf(['left', 'center', 'right']),
      sortable: types.bool
    })),
    data: types.arrayOf(types.object)
  },

  getInitialState() {
    var column = this.props.columns[0].name;
    return {
      sort: {
        column,
        order: 'asc'
      },

      data: sortBy(this.props.data, column)
    };
  },

  sortData(header) {
    var {column: oldSortColumn, order: oldSortOrder} = this.state.sort;
    var oldData = this.state.data;
    var newSortColumn = header.props.name;
    var newData;
    var newSortOrder;

    if (oldSortColumn !== newSortColumn) {
      newSortOrder = 'asc';
      newData = sortBy(oldData, newSortColumn);
    } else {
      newSortOrder = oldSortOrder === 'asc' ? 'desc' : 'asc';
      newData = oldData.reverse();
    }

    this.setState({
      sort: {
        column: newSortColumn,
        order: newSortOrder
      },
      data: newData
    });
  },

  render() {
    var {columns, classes} = this.props;

    var headings = columns.map(function(column) {
      return (
        <TableHeader key={column.name} name={column.name} sortable={column.sortable} sortState={this.state.sort} onSortableTableHeaderClick={this.sortData}>
          {column.title}
        </TableHeader>
      );
    }, this);

    var rows = this.state.data.map(function(datum, datumIndex) {
      return (<TableRow data={datum} key={datumIndex} columnNames={columns.map(c => c.name)} alignment={columns.map(c => c.align)} />);
    });

    return (
      <table className={classnames('table', 'table-sortable', classes)}>
        <thead>
          <tr>
            {headings}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

module.exports = {SortableTable};
