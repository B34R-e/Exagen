import React from "react";
import defaultImg1 from "../asset/defaultImg1.png";
import { statusFormat } from "utils/dataFormat";

export const ElementApproval = ( props ) => {
  const handleColor = ( status ) => {
    if ( status === 0 ) return "bg-yellow_state_background text-yellow_base";
    if ( status === 1 ) return "bg-green_state_background text-green_state";
    if ( status === 2 ) return "bg-red_reject_background text-red_state";
  }
  return (
    <div
      className={ `shadow-md flex flex-row w-full h-fit px-4 py-2 bg-white rounded-[10px] items-center gap-4` }
      onClick={ props?.event }
    >
      <img src={ props?.defaultImg1 } className="w-11 h-11 rounded-[10px]"></img>
      <div className="w-[25%]">
        <span
          className={ `${ props?.approve ? "text-blue_dark" : "text-text_form"
            } font-inter font-semibold block truncate` }
        >
          { props?.name }
        </span>
      </div>
      <div className="ml-10 w-[10%]">
        <span
          className={ `
             text-text_form
          font-inter font-medium `}
        >
          { props?.nameOfSubject }
        </span>
      </div>
      <div className="w-[10%]">
        <span
          className={ `${ props?.status ? "text-blue_dark" : "text-text_form"
            } font-inter font-semibold block truncate` }
        >
          { props?.price } Xu
        </span>
      </div>
      <div className="w-[20%]">
        <span
          className={ `${ props.status ? "text-blue_dark" : "text-text_form"
            } font-inter font-semibold ` }
        >
          { props?.NameRequireApprove }
        </span>
      </div>
      <div
        className={ `w-[13%] font-semibold font-inter rounded-[20px] text-center ${ handleColor( props?.status ) }` }
      >
        { statusFormat(
          props?.status
        ) }
      </div>
    </div>
  );
};

ElementApproval.defaultProps = {
  defaultImg1: defaultImg1,
  title: "Bộ câu hỏi 20 câu hỏi Hoá học hay nhât",
  status: false,
  subject: "Hoá Học",
  Price: "2000",
  NameRequireApprove: "Nguyễn Văn Bân",
  State: "Đã duyệt",
};
