import React, { useState } from "react";
import cont from '../assets/contact/cont.avif'
import axios from 'axios';

const contactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMsg('');
        setErrorMsg('');

        try {
            const response = await axios.post('http://localhost:4000/api/auth/sendContactMail', formData);
            if (response.data.success) {
                setSuccessMsg('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setErrorMsg('Failed to send message. Please try again.');
            }
        } catch (error) {
            setErrorMsg('Error sending message. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
        <div className="flex justify-center items-center pt-[4em]">
                        <div className="w-4/5 max-w-[800px] bg-[rgba(183,178,178,0.13)] flex gap-[19px]">
                            <img src={cont} alt="Contact" />
                            <form className="flex flex-col gap-[8px] pl-3 pt-[21px]"
                                onSubmit={handleSubmit}>
        
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="pl-[9px] w-[24vw] h-[7vh] border  rounded-sm border-solid border-[rgb(204,201,201)]"
                                    type="text" placeholder="Your Name" required />
        
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="pl-[9px] w-[24vw] h-[7vh] border  rounded-sm border-solid border-[rgb(204,201,201)]"
                                    type="email"
                                    placeholder="Your Email" required />
        
                                <input
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="pl-[9px] w-[24vw] h-[7vh] border rounded-sm border-solid border-[rgb(204,201,201)]"
                                    type="text" placeholder="Subject" required />
        
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="pl-[9px] w-[24vw] h-[20vh] border pt-3 rounded-sm border-solid border-[rgb(204,201,201)]"
                                    placeholder="Message" required />
        
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="h-[6vh] w-[11vw] bg-[rgb(34,159,34)] text-[white] cursor-pointer border-none">{loading ? 'Sending...' : 'Send Message'}</button>
                                {successMsg && (
                                    <p className="text-green-600 mt-2">{successMsg}</p>
                                )}
                                {errorMsg && (
                                    <p className="text-red-600 mt-2">{errorMsg}</p>
                                )}
                            </form>
                        </div>
                    </div>
        </>
    )
}

export default contactForm;