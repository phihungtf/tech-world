import MyCart from '@/app/components/myCart/MyCart';
import FormCustomer from '@/app/components/myCart/FormCustomer';
import CartInformation from '@/app/components/myCart/CartInformation';

export const metadata = {
    title: 'Giỏ hàng của tôi | TechWorld',
    icons: '/images/logo.png',
};

export default function Page() {
    return (
        <div className='flex flex-row my-4'>
            <div className='block'>
                <MyCart />
            </div>
            <div className='ml-4 w-full bg-white rounded-sm p-4'>
                {/* Customer information */}
                <FormCustomer />

                <hr />

                {/* Order information */}
                <CartInformation />
            </div>
        </div>
    );
}