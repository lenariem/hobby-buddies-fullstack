import React from "react";
import { useDispatch, useSelector } from "react-redux";
import formatDate from "../../utils/formatDate";

export const Experience = () => {
    const dispatch = useDispatch();
    const experience = useSelector(state => state.profile.profile.experience);
    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className="hide-sm">{exp.title}</td>
            <td>
                {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : "Now"}
            </td>
            <td>
                <button
                    /* onClick={() => deleteExperience(exp._id)} */
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Title</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </>
    );
};
