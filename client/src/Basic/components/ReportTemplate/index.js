import React from "react";
import moment from "moment/moment";
import { bloodList } from "../../../Utils/DropdownData";
import { AddNewButton } from "../../../Buttons";
import { EMPTY_ICON } from "../../../icons";
import { Loader } from "../../components";
import { findFromList } from "../../../Utils/helper";

const ACTIVE = (
  <button className="rounded bg-green-500 border border-green-300 p-1 disabled">
    ACTIVE
  </button>
);
const INACTIVE = (
  <button className="rounded bg-red-500 border border-red-300 p-1 disabled">
    INACTIVE

  </button>
);
const BLOOD_LIST = bloodList;
const MOMENT = moment;
const FIND_FROM_LIST = findFromList;

const Report = ({
  heading,
  tableHeaders,
  tableDataNames,
  tableWidth = "50%",
  loading,
  searchValue,
  setSearchValue,
  data,
  onClick,
  onNew,
}) => {
  return (
    <div className="flex flex-col w-full h-[95%] overflow-auto">
      <div className="md:flex md:items-center md:justify-between page-heading">
        <div className="heading text-center md:mx-10">{heading}</div>
        <div className="flex sub-heading justify-center md:justify-start items-center">
          <input
            type="text"
            className="text-black h-6 focus:outline-none border md:ml-3"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <AddNewButton onClick={onNew} />
        </div>
      </div>
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            {data?.length === 0 ? (
              <div className="flex-1 flex justify-center text-blue-900 items-center text-3xl">
                <p>{EMPTY_ICON} No Data Found...! </p>
              </div>
            ) : (
              <div
                className="md:grid md:justify-items-stretch "
                style={{ width: tableWidth }}
              >
                <table className="table-auto text-center">
                  <thead className="border-2 table-header">
                    <tr>
                      {tableHeaders.map((head, index) => (
                        <th
                          key={index}
                          className="border-2  top-0 stick-bg"
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="border-2">
                    {data?.map((dataObj, index) => (
                      <tr
                        key={index}
                        className="border-2 table-row"
                        onClick={() => onClick(dataObj.id)}
                      >
                        {tableDataNames.map((data, index) => (
                          <td key={index} className="table-data" style={{ backgroundColor: data === "dataObj.color" ? eval("dataObj.pantone") : undefined }}>
                            {eval(data)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default Report;
