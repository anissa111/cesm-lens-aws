import React, { Component, forwardRef } from 'react'
import { readRemoteFile } from 'react-papaparse'
import MaterialTable from 'material-table'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
} from '../InfoSection/InfoElements'
import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
}

export default class Catalog extends Component {
  state = { data: [], columns: [] }

  componentDidMount() {
    readRemoteFile(
      'https://raw.githubusercontent.com/NCAR/cesm-lens-aws/master/intake-catalogs/aws-cesm1-le.csv',
      {
        complete: (results) => {
          this.setState({
            data: results.data.slice(1),
            columns: results.data[0],
          })
        },
      }
    )
  }
  render() {
    const columns = this.state.columns.map((column) => {
      return { title: column.toUpperCase(), field: column }
    })

    const tableData = this.state.data.map((row) => {
      let array = this.state.columns.map((_, idx) => {
        return [this.state.columns[idx], row[idx]]
      })

      const output = Object.fromEntries(array)
      return output
    })

    return (
      <>
        <InfoContainer lightBg={true} id={'catalog'}>
          <InfoWrapper>
            <InfoRow>
              <MaterialTable
                title="Intake-ESM Catalog"
                icons={tableIcons}
                data={tableData}
                columns={columns}
                options={{
                  filtering: true,
                  grouping: true,
                  search: true,
                  paging: true,
                  sorting: true,

                  headerStyle: {
                    backgroundColor: '#01BF71',
                    color: '#FFF',
                  },
                }}
              ></MaterialTable>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    )
  }
}
