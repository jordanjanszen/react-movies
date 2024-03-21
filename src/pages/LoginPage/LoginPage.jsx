// LoginPage.js

import React, { useState } from 'react';

export default function LoginPage({setUser}) {
	const defaultFormData = {
		username: '',
		password: '',
		error: '',
	};
	const [formData, setFormData] = useState(defaultFormData);
	// console.log(formData);
	function handleChange(evt) {
		setFormData({...formData, [evt.target.name]: evt.target.value, error: ''})
	}
	
	function handleSubmit(evt) {
		evt.preventDefault()
		setUser(formData.username)
	}
	
	return (
		<div>
			<div className="form-container">
				<form autoComplete="off" onSubmit={handleSubmit}>
					<label>Name</label>
					<input type="text" name="username" value={formData.username} onChange={handleChange} autoComplete={'username'} required/>
					<label>Password</label>
					<input type="password" name="password" value={formData.password} onChange={handleChange} autoComplete={'current-password'} required/>
					<button type="submit">Login</button>
				</form>
			</div>
			<p className="error-message">&nbsp;{formData.error}</p>
		</div>
	);
}