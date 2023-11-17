import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    // const navigate = useNavigate()

    //context
    const [auth, setAuth] = useAuth()

    //state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    //get user data
    useEffect(() => {
        const { email, name, phone, address, password } = auth.user
        setName(name)
        setPhone(phone)
        setEmail(email)
        setAddress(address)
        setPassword(password)

    }, [auth?.user])

    //form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/profile`, { name, email, password, phone, address })
            if (data?.error) {
                toast.error(data?.error)
            } else {
                setAuth({ ...auth, user: data?.updatedUser })
                let ls = localStorage.getItem('auth')
                ls = JSON.parse(ls)
                ls.user = data.updatedUser
                localStorage.setItem('auth', JSON.stringify(ls))
                toast.success('Profile updated successfully')
            }

        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }

    return (
        <Layout Layout title={'User Dashboard - Edit Profile'} >
            <div className='container-fluid m-3 p-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <UserMenu />
                    </div>
                    <div className='col-md-9'>
                        <div className='form-container' style={{ minHeight: '90vh' }}>
                            <form onSubmit={handleSubmit}>
                                <h4 className='title'>UPDATE PROFILE FORM</h4>
                                <div className="mb-3">
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your Name' autoFocus />
                                </div>
                                <div className="mb-3">
                                    <input type="email" disabled value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' />
                                </div>
                                <div className="mb-3">
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your Phone' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your Address' />
                                </div>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile