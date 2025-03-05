import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorForm } from "./ErrorForm";
import { DraftPatient } from "../interfaces/interfaces";
import { usePatientStore } from "../store/store";
import { toast } from "react-toastify";

export const PatientForm = () => {

    const addPatient = usePatientStore(state => state.addPatient);
    const activeId = usePatientStore(state => state.activeId);
    const patients = usePatientStore(state => state.patients);
    const updatePatient = usePatientStore(state => state.updatePatient);

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<DraftPatient>();

    useEffect(() => {
        if(activeId){
            const activePatient = patients.filter(patient => patient.id === activeId)[0];
            setValue('name', activePatient.name);
            setValue('caretaker', activePatient.caretaker);
            setValue('email', activePatient.email);
            setValue('date', activePatient.date);
            setValue('symptoms', activePatient.symptoms);
        }

    }, [activeId])
    
    const registerPatient = (data: DraftPatient) => {
        
        let message = '';

        if(activeId) {
            updatePatient(data);
            message= 'Patient updated successfully';
        }

        else {

            addPatient(data);
            message= 'Patient added successfully';
        }
        toast.success(message)
        reset();
    };
  
    return (

        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Tracking Patient</h2>
    
            <p className="text-lg mt-5 text-center mb-10">
                Add Patients and {''}
                <span className="text-indigo-600 font-bold">admin them</span>
            </p>
    
            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                    <div className="mb-5">
                        <label htmlFor="name" className="text-sm uppercase font-bold">
                            Patient 
                        </label>
                        <input  
                            id="name"
                            className="w-full p-3  border border-gray-100"  
                            type="text" 
                            placeholder="Patient's name"
                            {...register('name', {
                                required: 'Patient name is required'
                            })}
                        />
                        
                        {errors.name && <ErrorForm>{errors.name.message}</ErrorForm>}
                        
                    </div>
    
                    <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Owner 
                    </label>
                    <input  
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Caretaker's name" 
                        {...register('caretaker', {
                            required: 'Caretaker name is required'
                        })}
                    />
                    
                    {errors.caretaker && <ErrorForm>{errors.caretaker.message}</ErrorForm>}
                    </div>
    
                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email 
                    </label>
                    <input  
                        id="email"
                        className="w-full p-3  border border-gray-100"  
                        type="email" 
                        placeholder="SignUp email" 
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email not valid'
                              }
                        })}
                    />
                    
                    {errors.email && <ErrorForm>{errors.email.message}</ErrorForm>}
                </div>
    
                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Discharge Date
                    </label>
                    <input  
                        id="date"
                        className="w-full p-3  border border-gray-100"  
                        type="date" 
                        {...register('date', {
                            required: 'Date is required'
                        })}
                    />
                    
                    {errors.date && <ErrorForm>{errors.date.message}</ErrorForm>}
                </div>
                
                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                    Symptoms 
                    </label>
                    <textarea  
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"  
                        placeholder="Patient's symptoms" 
                        {...register('symptoms', {
                            required: 'Symptoms are required'
                        })}
                    />
                    {errors.symptoms && <ErrorForm>{errors.symptoms.message}</ErrorForm>}
                </div>
    
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Save patient'
                />
            </form> 
        </div>
        )
};