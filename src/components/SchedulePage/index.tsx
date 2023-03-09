import "./style-schedule-page.scss";

const SchedulePage = () => {
  return (
    <div className="schedule-page-wrapper">
      <div className="schedule-page-wrapper__title">League Schedule</div>
      <div className="schedule-page-wrapper__table">
        <div className="row row--header">
          <div className="col col_1">Date/Time</div>
          <div className="col col_2">Stadium</div>
          <div className="col col_3">Home Team</div>
          <div className="col col_4"></div>
          <div className="col col_5">Away Team</div>
        </div>

        <div className="row">
          <div className="col col--vertical col_1">
            <div>5.5.2022</div>
            <div>11:50</div>
          </div>
          <div className="col col_2">My Dinh</div>
          <div className="col col_3">
            <div className="country_name">VietNam</div>
            <div className="flag">
              <img src={"/vietnam.png"} alt="" />
            </div>
          </div>
          <div className="col col_4">10:0</div>
          <div className="col col_5">
            <div className="country_name">Thailand</div>
            <div className="flag">
              <img src={"/thailand.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
