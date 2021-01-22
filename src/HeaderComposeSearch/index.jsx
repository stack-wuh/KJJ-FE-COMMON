import React, { Fragment } from 'react'

const HeaderComposeSearch = ({
  initialValues
}) => {
  return (<Fragment>
    <div>{JSON.stringify(initialValues)}</div>
  </Fragment>)
}

HeaderComposeSearch.defaultProps = {
  initialValues: {}
}

export default HeaderComposeSearch