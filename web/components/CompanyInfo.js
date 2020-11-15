import dayjs from "dayjs";

const CompanyInfo = ({ city, state, founded }) => {
  const location = `${city}, ${state}`;
  return (
    <div className="flex items-center mt-1">
      <div className="flex items-center">
        <svg
          className="h-4 w-4 fill-current text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
        <span className="text-gray-700 text-xs tracking-wide mx-1">
          {location}
        </span>

        {founded && (
          <div className="flex items-center">
            <span>
              <svg
                className="h-4 w-4 fill-current text-gray-600 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85-.7.71zM18 3h-3.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11a6.743 6.743 0 0 1-1.42-2H6V5h2v3h8V5h2v5.08c.71.1 1.38.31 2 .6V5c0-1.1-.9-2-2-2zm-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
              </svg>
            </span>
            <span className="mx-1 text-gray-700 text-xs tracking-wide">
              {dayjs(founded).format("D MMM, YYYY")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyInfo;
