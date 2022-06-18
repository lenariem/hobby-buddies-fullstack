import React from "react";
import { useDispatch, useSelector } from "react-redux";
import formatDate from "../../utils/formatDate";

export const Education = () => {
    const dispatch = useDispatch();
    const education = useSelector(state => state.profile.profile.education);
    
    const educations = education.map((edu) => (
        <tr key={edu._id}>
          <td>{edu.school}</td>
          <td className="hide-sm">{edu.degree}</td>
          <td>
            {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
          </td>
          <td>
            <button
             /*  onClick={() => deleteEducation(edu._id)} */
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      ));
    
      return (
        <>
          <h2 className="my-2">Education Credentials</h2>
          <table className="table">
            <thead>
              <tr>
                <th>School</th>
                <th className="hide-sm">Degree</th>
                <th className="hide-sm">Years</th>
                <th />
              </tr>
            </thead>
            <tbody>{educations}</tbody>
          </table>
        </>
      );
    };