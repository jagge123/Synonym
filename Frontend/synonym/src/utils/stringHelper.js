function GetValueFromQuery(query, parameter) {
  return query.split(`?${parameter}=`)[1];
}

export default GetValueFromQuery;
