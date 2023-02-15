import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";

const defaultValues = {
	"first_name": "",
	"last_name": "",
	"email": "",
	"password": "",
	"birthday": ""
}

const ModalForm = ({
	isShowModal, 
	handleClickShowModal, 
	createUser,
	updatingUser,
	updateUser,
	setUpdatingUser
}) => {

	const {register, handleSubmit, reset} = useForm()

	const submit = (data) => {
		if (updatingUser) {
			updateUser(data, updatingUser.id);
		}else {
			createUser(data);
		}
		reset(defaultValues);
	};

	const handleClickClose = () => {
		handleClickShowModal();
		reset(defaultValues);
		setUpdatingUser()
	}

	useEffect(() => {
		if(updatingUser) {
			reset(updatingUser)
		}
	}, [updatingUser]);
	

	return (
		<section className={
            `absolute bg-background-backgroundColor/80 top-0 h-screen left-0 right-0 place-content-center ${isShowModal ? 'grid' : 'hidden'}`}>
			
            <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5 
			w-[300px] md:w-[400px] relative bg-[#ffffff] font-primaryFont p-8 rounded-lg shadow-lg shadow-background-backgroundColor">
				<FaTimes onClick={handleClickClose} className="absolute top-[10px] right-[10px] text-[15px] hover:text-font-colorPrimaryFont transition-all ease-in" />
				<h3 className="bg-background-colorPrimary rounded-lg text-center text-[#fff] shadow-background-backgroundColor/50 shadow-md text-[30px] font-bold mt-3 mb-3 ml-0 mr-0">
					{updatingUser ? "Edit user" : "New user"}
				</h3>
				<div className="leading-[30px]">
					<label className="block text-[#000]/60 shadow-md font-semibold bg-background-colorTertiary rounded-md text-center shadow-background-backgroundColor/50">
						First Name
					</label>
					<input
						className="w-full p-[5px] rounded-lg shadow-md shadow-background-backgroundColor/40 outline-none"
						type="text" {...register("first_name")}
					/>
				</div>
				<div className="leading-[30px]">
					<label className="block text-[#000]/60 shadow-md font-semibold bg-background-colorTertiary rounded-md text-center shadow-background-backgroundColor/50">
						Last Name
					</label>
					<input
						className="w-full p-[5px] rounded-lg shadow-md shadow-background-backgroundColor/40 outline-none"
						type="text" {...register("last_name")}
					/>
				</div>
				<div className="leading-[30px]">
					<label className="block text-[#000]/60 shadow-md font-semibold bg-background-colorTertiary rounded-md text-center shadow-background-backgroundColor/50">
						Email
					</label>
					<input
						className="w-full p-[5px] rounded-lg shadow-md shadow-background-backgroundColor/40 outline-none"
						type="email" {...register("email")}
					/>
				</div>
				<div className="leading-[30px]">
					<label className="block text-[#000]/60 shadow-md font-semibold bg-background-colorTertiary rounded-md text-center shadow-background-backgroundColor/50">
						Password
					</label>
					<input
						className="w-full p-[5px] rounded-lg shadow-md shadow-background-backgroundColor/40 outline-none"
						type="password" {...register("password")}
					/>
				</div>
				<div className="leading-[30px]">
					<label className="block text-[#000]/60 shadow-md font-semibold bg-background-colorTertiary rounded-md text-center shadow-background-backgroundColor/50">
						Birthday
					</label>
					<input
						className="w-full p-[5px] rounded-lg shadow-md shadow-background-backgroundColor/40 outline-none"
						type="date" {...register("birthday")}
					/>
				</div>

				<button className="bg-background-colorPrimary border-none text-[#fff] p-[10px] rounded-lg shadow-md shadow-background-backgroundColor/50 text-[18px] font-semibold cursor-pointer hover:bg-[#3432c4] hover:text-[#fff] transition hover:scale-110 ease-in duration-200">
					{updatingUser ? " Save changed" : "Add new user"}
				</button>
			</form>
		</section>
	);
};

export default ModalForm;
