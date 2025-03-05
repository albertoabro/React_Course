import { usePatientStore } from "../store/store"
import { PatientDetails } from "./PatientDetails";

export const PatientList = () => {

    const patients = usePatientStore(state => state.patients);

    return (
    <div className="md:w-1/2  md:h-screen overflow-y-scroll"> 
        { patients.length ? (
            <>
                <h2 className="font-black text-3xl text-center"> Patient List </h2>
                <p className="text-xl mt-5 mb-10 text-center">
                        Admin your {''}
                        <span className="text-indigo-600 font-bold">Patients and Appointments</span>
                </p>
               
                    {
                        patients.map(patient => (
                            <PatientDetails
                                key={patient.id}
                                patient={patient}
                            />
                        ))
                    }

            </>
        ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No patients </h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Start adding patients {''}
                        <span className="text-indigo-600 font-bold">to see them here</span>
                    </p>
                </>
            )
        }
    </div>
    )
}
