import React from "react";
import moment from "moment/moment";
import { EMPTY_ICON } from '../../../icons';
import {Loader} from "../../components"
import { findFromList } from "../../../Utils/helper";

const ACTIVE = (
  <button className="rounded bg-green-500 border p-1 disabled">ACTIVE</button>
);
const INACTIVE = (
  <button className="rounded bg-red-500 border p-1 disabled">INACTIVE</button>
);
const EXPIRED = (
  <button className="rounded bg-gray-500 border p-1 disabled">EXPIRED</button>
);
const ACTIVE_PLAN = (
  <button className="rounded bg-blue-600 border p-1 disabled">ACTIVE</button>
);

const MOMENT = moment;
export default function FormReport({
  tableHeaders,
  tableDataNames,
  setId,
  data,
  loading,
  searchValue,
  setSearchValue,
}) {
  return (
    <div className="flex flex-col md:justify-items-center h-[450px] overflow-auto">
      <div className="md:text-center md:gap-8">
        <input
          type="text"
          className="text-sm bg-gray-100 focus:outline-none border w-full"
          id="id"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {data?.length === 0 ? (
            <div className="flex-1 flex justify-center text-blue-900 items-center text-xl mt-5">
              <p>{EMPTY_ICON} No Data Found...! </p>
            </div>
          ) : (
            <div
              className="md:grid md:justify-items-stretch overflow-auto"
            >
              <table className="table-auto text-center">
                <thead className="border-2 table-header">
                  <tr>
                    {tableHeaders.map((head, index) => (
                      <th
                        key={index}
                        className="border-2 sticky top-0 stick-bg"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="border-2">{console.log(data,"data")}
                  {data?.map((dataObj, index) => (
                    <tr key={index} className="border-2 table-row" onClick={()=> setId(dataObj.id)} >
                      {tableDataNames.map((data, index) => (
                        <td key={index} className="table-data" style={{backgroundColor: data === "dataObj.color" ? eval("dataObj.pantone") : undefined}}>
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
    </div>
  );
}
