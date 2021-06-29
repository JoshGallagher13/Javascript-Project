var filter = data;
showData(data);

function showData(data) {
  d3.select('tbody').html('');

  data.forEach(obj => {
    var row = d3.select('tbody').append('tr');

    Object.values(obj).forEach(val=>{
      row.append('td').text(val);
    });
  });
};

d3.select('button').on('click', handleClick);

function handleClick() {
  d3.selectAll('input').property('value','');
  filter = data;
  showData(filter);
};

d3.selectAll('input').on('change', handleChange);

function handleChange() {
  var key = d3.select(this).node().id;
  var value = d3.select(this).node().value;
  filter = filter.filter(obj => obj[key] == value);
  showData(filter);
}