/*
/!* globals Session *!/

var sortTypes = ['last_update', 'status']

var sortNames = {
  last_update: 'Updated',
  status: 'Status'
}

App.FilterArea = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },

  handleToggleDirection (e) {
    e.preventDefault()
    var newSort = Session.get('searchSortDirection') === 1 ? -1 : 1
    Session.set('searchSortDirection', newSort)
  },

  handleToggleType (e) {
    e.preventDefault()
    var currentType = Session.get('searchSortType')
    var currentIndex = sortTypes.indexOf(currentType)
    var nextIndex = currentIndex + 1
    if (nextIndex >= sortTypes.length) {
      nextIndex = 0
    }
    var newSortType = sortTypes[nextIndex]
    Session.set('searchSortType', newSortType)
  },

  sortDirection () {
    var sorter = typeof Session !== 'undefined' ? Session.get('searchSortDirection') : App.defaultSortDirection
    return sorter === 1 ? 'asc' : 'desc'
  },

  sortType () {
    var sorter = typeof Session !== 'undefined' ? Session.get('searchSortType') : App.defaultSortType
    return sortNames[sorter]
  },

  render () {
    return (
      <div>
        {this.props.data.dapps.length &&
          <div className='filter-area white-text'>
            <div className='col s5'>
              {this.props.data.count} dapps {this.props.data.resultType}
            </div>
            <div className='col s7 right-align'>
              Sort: <a href='#' onClick={this.handleToggleType}>{this.sortType()}</a>
              <i onClick={this.handleToggleDirection} className={'sort-direction fa fa-sort-amount-' + this.sortDirection()}></i>
            </div>
          </div>
        }
      </div>
    )
  }
})
*/
