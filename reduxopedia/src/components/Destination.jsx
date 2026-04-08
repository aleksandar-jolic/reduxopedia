import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDestination, removeDestination } from "../redux/slice/destinationSlice";

function Destination() {
    const destinations = useSelector((state) => state.destinationStore.destinations);
    const [destination, manageDestination] = useState('');
    const dispatch = useDispatch();


    return ( 
        <div>
            <h1 className="text-warning pt-3">Destinations</h1>
            <div>
                <input type="text" onChange={(e) => manageDestination(e.target.value)} className="form-control" placeholder="Enter destination name" id="newDestination" />
                <button className="btn btn-primary m-3" onClick={() => dispatch(addDestination({ name: destination, description: 'Description for ' + destination }))}>Add Destination</button>
                <button className="btn btn-danger m-3" onClick={() => dispatch(removeDestination(destination))}>Remove Destination</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {destinations.map((destination) => (
                        <tr key={destination.name}>
                            <td>{destination.name}</td>
                            <td>{destination.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
     );
}

export default Destination;