import React from "react";
import UserCard from "./UserCard";

const UsersList = ({users, deleteUser, setUpdatingUser, handleClickShowModal}) => {
	return (
		<div className="grid place-content-center">
			<section className="flex flex-col gap-5 md:grid grid-cols-2 lg:grid lg:grid-cols-3">
			{users.map((user) => (
				<UserCard 
				key={user.id} 
				user={user} 
				deleteUser={deleteUser} 
				setUpdatingUser={setUpdatingUser}
				handleClickShowModal={handleClickShowModal} 
			/>
			))}
		</section>
		</div>
	);
};

export default UsersList;
