'use client';
import { useEffect, useState } from 'react';
import EditProfile from '../form/EditProfile';
import { User } from '../../models/user';

type Address={
    name: string,
    phone: string,
    address: string
}

export default function Profile() {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [address, setAddress]=useState<Array<Address>>([]);
    let user={} as User;
    useEffect(()=>{
        setAddress([
            {
                name: 'Lê Công Đắt',
                phone: '0794299999',
                address: 'KTX Khu B ĐHQG-HCM'
            },
            {
                name: 'Nguyễn Phi Hùng',
                phone: '0123456789',
                address: 'Tuy An, Phú Yên'
            },
            {
                name: 'Nguyễn Văn Hào',
                phone: '0987654321',
                address: 'Pleiku, Gia Lai'
            }
        ]);
    }, []);
    const componentWillMount=()=> {
        user = {
            name: 'Lê Công Đắt',
            phone: '0794299999',
            email: '',
        } as User;
    };
    useState(componentWillMount);
    return (
        <div className='flex justify-around my-20 mx-10'>
            <div className='flex flex-col justify-center items-start me-20 w-60 h-full space-y-5'>
                <div
                    className='flex justify-start items-center cursor-pointer'
                    onClick={() => setIndex1(0)}
                >
                    <i className='bi bi-person text-blue-500 text-2xl me-2'></i>
                    <p>Tài Khoản Của Tôi</p>
                </div>
                <div
                    className={
                        (index1 === 0 ? 'visibility' : 'hidden') +
                        ' flex flex-col justify-center items-start ms-10 space-y-4'
                    }
                >
                    <p
                        className={
                            (index2 === 0 ? 'text-orange-600 font-medium' : '') + ' cursor-pointer'
                        }
                        onClick={() => setIndex2(0)}
                    >
                        Hồ Sơ
                    </p>
                    <p
                        className={
                            (index2 === 1 ? 'text-orange-600 font-medium' : '') + ' cursor-pointer'
                        }
                        onClick={() => setIndex2(1)}
                    >
                        Địa chỉ
                    </p>
                    <p
                        className={
                            (index2 === 2 ? 'text-orange-600 font-medium' : '') + ' cursor-pointer'
                        }
                        onClick={() => setIndex2(2)}
                    >
                        Đổi mật khẩu
                    </p>
                </div>
                <div
                    className='flex justify-start items-center cursor-pointer'
                    onClick={() => setIndex1(1)}
                >
                    <i className='bi bi-receipt-cutoff text-orange-500 me-2 text-2xl'></i>
                    <p className={index1 === 1 ? 'text-orange-600 font-medium' : ''}>Đơn Mua</p>
                </div>
                <div
                    className='flex justify-start items-center cursor-pointer'
                    onClick={() => setIndex1(2)}
                >
                    <i className='bi bi-bell text-green-500 me-2 text-2xl'></i>
                    <p className={index1 === 2 ? 'text-orange-600 font-medium' : ''}>Thông Báo</p>
                </div>
            </div>
            <div className='rounded-sm bg-white w-full h-full px-10 py-10'>
                <div className={index1 === 0 && index2 === 0 ? 'visible' : 'hidden'}>
                    <p className='text-3xl'>Hồ Sơ Của Tôi</p>
                    <p className='text-black-300'>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                    <hr className='mt-2'></hr>
                    <div className='w-full'><EditProfile user={user} /></div>
                </div>
                <div className={index1 === 0 && index2 === 1 ? 'visible' : 'hidden'}>
                    <div className='flex justify-between'><p className='text-3xl'>Địa Chỉ Của Tôi</p>
                    <button className='bg-amber-500 text-white py-2 px-2 hover:opacity-50 active:bg-amber-700 focus:outline-none focus:ring focus:ring-amber-300'>
                        + Thêm địa chỉ mới
                    </button>
                    </div>
                    <hr className='mt-2'></hr>
                    <div>
                    {address.map(({name, phone, address}, index)=>(
                        <div key={index} className='flex justify-between'>
                        <div className='py-4'>
                            <div className='flex justify-start space-x-2'><p>{name}</p><p className='text-gray-500'> | </p><p className='text-gray-500'>{phone}</p></div>
                            <p className='text-gray-500'>{address}</p>
                            {index==0 && (<div className='text-sm text-amber-500 outline outline-amber-500 w-fit px-1 mt-1'>
                                Mặc định
                            </div>)}
                        </div>
                        <div className='flex flex-col justify-center items-center mb-6'>
                            <div className='flex justify-between my-2'>
                            <button className='text-blue-500 hover:text-amber-500 mx-2'>Chỉnh sửa</button>
                            <button className='text-blue-500 hover:text-amber-500 mx-2'>Xóa</button>
                            </div>
                            <button className={'outline outline-1 bg-white outline-gray-500 px-2 py-2 hover:bg-gray-100 '+(index==0?'text-gray-500 cursor-not-allowed ':'')}>Đặt làm mặc định</button>
                        </div>
                        <hr className='w-full absolute'></hr>
                        </div>
                    ))}
                    </div>
                </div>
                <div className={index1 === 0 && index2 === 2 ? 'visible' : 'hidden'}>
                    <p className='text-3xl'>Đổi mật khẩu</p>
                    <p className='text-black-300'>Thiết lập mật khẩu mạnh để bảo vệ tài khoản của bạn</p>
                    <hr className='mt-2'></hr>
                    
                </div>
            </div>
        </div>
    );
}
