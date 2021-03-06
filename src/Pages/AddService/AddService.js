import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        fetch('https://gentle-springs-26291.herokuapp.com/services', {
        method: 'POST',
        headers: {
           "content-type": "application/json"
        },
        body: JSON.stringify(data)
     })
            .then(res => res.json())
            .then(data => {
                    alert('added successfully');
            });
                    reset();
                };

    return (
        <div className="add-service">
            <h2 className="text-center">Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input className="bg-info " type="submit" />
            </form>
        </div>
    );
};

export default AddService;

