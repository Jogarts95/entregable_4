import React from "react";
import { FaPen, FaTrashAlt, FaBirthdayCake, FaUserPlus } from "react-icons/fa";

const UserCard = ({ 
	user, 
	deleteUser, 
	setUpdatingUser, 
	handleClickShowModal }) => {
	
	const handleClickEdit = () => {
		setUpdatingUser(user);
		handleClickShowModal();
	};

	return (
		<article className=" bg-[#ffffffec] rounded-lg shadow-lg p-3 shadow-background-backgroundColor font-medium grid gap-3 font-secundaryFont" key={user.id}>
			
			<h3 className="bg-[#db50ba] text-[#fff] p-2 rounded-lg shadow-md shadow-background-backgroundColor">
				<span className="font-bold">Nombre: </span>{user.first_name} {user.last_name}
			</h3>
			
			<ul className="grid gap-3">
				<li className=" bg-background-colorPrimary text-[#fff] p-2 rounded-lg shadow-md shadow-background-backgroundColor">
					<span className="font-bold">Email: </span>{user.email}
				</li >
				<li className="flex gap-2 bg-background-colorPrimary text-[#fff] p-2 rounded-lg shadow-md shadow-background-backgroundColor">
					<span className="font-bold">Birthday:</span>
					<div className="flex gap-1 justify-start items-center">
					<FaBirthdayCake className="text-[#f9f62c]"/>{user.birthday}
					</div>
				</li>
			</ul>
			
			<footer className="flex justify-end gap-4 p-2">
				<button className="bg-font-colorPrimaryFont text-[#fff] rounded-full p-2 shadow-md shadow-background-backgroundColor hover:text-[#ff3d3d] transition hover:scale-110 ease-in duration-200" onClick={() => deleteUser(user.id)}>
					<FaTrashAlt />
				</button>
				<button className="bg-font-colorPrimaryFont text-[#fff] rounded-full p-2 shadow-md shadow-background-backgroundColor hover:text-font-colorFourthFont transition ease-in hover:scale-110 duration-200" onClick={handleClickEdit}>
					<FaPen />
				</button>
			</footer>
		</article>
	);
};

export default UserCard;
