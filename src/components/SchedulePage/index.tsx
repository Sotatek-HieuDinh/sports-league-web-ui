import "./style-schedule-page.scss";

const Title = () => {
  return <div className="schedule-page-wrapper__title">League Schedule</div>;
};

const Table = () => {
  const RowHeader = () => {
    return (
      <div className="row row--header">
        <div className="col col_1">Date/Time</div>
        <div className="col col_2">Stadium</div>
        <div className="col col_3">Home Team</div>
        <div className="col col_4"></div>
        <div className="col col_5">Away Team</div>
      </div>
    );
  };

  const Row = () => {
    return (
      <div className="row">
        <div className="col col--vertical col_1">
          <div>5.5.2022</div>
          <div>11:50</div>
        </div>
        <div className="col col_2">My Dinh</div>
        <div className="col col_3 font-bold">
          <div className="country_name">VietNam</div>
          <div className="flag">
            <img src={"/vietnam.png"} alt="" />
          </div>
        </div>
        <div className="col col_4 font-bold">10:0</div>
        <div className="col col_5 font-bold away-team">
          <div className="flag">
            <img src={"/thailand.png"} alt="" />
          </div>
          <div className="country_name">Thailand</div>
        </div>
      </div>
    );
  };

  return (
    <div className="schedule-page-wrapper__table">
      <RowHeader />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
};

const SchedulePage = () => {
  return (
    <div className="schedule-page-wrapper">
      <Title />
      <Table />
    </div>
  );
};

export default SchedulePage;
