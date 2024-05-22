import { Link, useLoaderData } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";

const Country = () => {
  const [data] = useLoaderData();
  return (
    <div className="color-theme">
      <div className="filter-container">
        <Link className="btn box-shadow" to="../">
          <IconArrowLeft />
          Back
        </Link>
      </div>
      <div className="container grid ">
        <div className="flag-container box-shadow">
          <img src={data.flags.svg} alt={data.name.common} />
        </div>
        <div className="flow">
          <h2 className="fs-900">{data.name.common}</h2>
          <div className="flex country-details">
            <div className="flow">
              <p className="fw-bold">
                Native Name:{" "}
                <span className="fw-light">
                  {Object.values(data.name.nativeName)[0].common}
                </span>
              </p>
              <p className="fw-bold">
                Population:{" "}
                <span className="fw-light">
                  {data.population.toLocaleString("en-US")}
                </span>
              </p>
              <p className="fw-bold">
                Region: <span className="fw-light">{data.region}</span>
              </p>
              <p className="fw-bold">
                Sub Region: <span className="fw-light">{data.subregion}</span>
              </p>
              <p className="fw-bold">
                Capital: <span className="fw-light">{data.capital}</span>
              </p>
            </div>
            <div className="flow">
              <p className="fw-bold">
                Top Level Domain:{" "}
                <span className="fw-light">{data.tld[0]}</span>
              </p>
              <p className="fw-bold">
                Currencies:{" "}
                <span className="fw-light">
                  {Object.values(data.currencies)[0].name}
                </span>
              </p>
              <p className="fw-bold">
                {Object.values(data.languages).length > 1
                  ? "Languages:"
                  : "Language:"}{" "}
                <span className="fw-light">
                  {Object.values(data.languages).join(", ")}
                </span>
              </p>
            </div>
          </div>
          {data?.borders?.length ? (
            <>
              <p className="fw-bold fs-600">Border Countries:</p>
              <div className="flex" style={{ gap: "1rem" }}>
                {data.borders.map((border, index) => (
                  <Link
                    key={index}
                    className="btn box-shadow"
                    to={`../${border}`}
                  >
                    {border}
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Country;
