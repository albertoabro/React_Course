import { toast } from 'react-toastify';
import { Patient } from '../interfaces/interfaces';
import { usePatientStore } from '../store/store';
import { PatientDetailsItem } from './PatientDetailsItem';

interface PatientDetailsProps {
    patient: Patient;
};

export const PatientDetails = ({patient}: PatientDetailsProps) => {

    const deletePatient = usePatientStore(state => state.deletePatient);
    const getPatientById = usePatientStore(state => state.getPatientById);

    const handleDelete = () => {
        deletePatient(patient.id);
        toast.error('Patient deleted successfully');
    }

    return (
        <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
            <PatientDetailsItem label='ID:' data={patient.id} />            
            <PatientDetailsItem label='Name:' data={patient.name} />            
            <PatientDetailsItem label='Caretaker:' data={patient.caretaker} />            
            <PatientDetailsItem label='Email:' data={patient.email} />            
            <PatientDetailsItem label='Discharge Date:' data={patient.date.toString()} />            
            <PatientDetailsItem label='Symptoms:' data={patient.symptoms} />

            <div className='flex flex-col lg:flex-row gap-3 justify-between mt-10'>
                <button
                    type='button' 
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                    onClick={() => getPatientById(patient.id)}
                >
                    Edit
                </button>

                <button
                    type='button' 
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                    onClick={handleDelete}    
                >
                    Delete
                </button>
            </div>            
        </div>
    )
}
