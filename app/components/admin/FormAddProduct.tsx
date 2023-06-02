import { useForm } from 'react-hook-form';

interface Props {
    ProductId?: string;
    name?: string;
    price?: number;
    categoryId?: string;
    category?: string;
    description?: string;
    showing?: boolean;
    setShowing?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FormAddProduct({
    ProductId,
    name,
    price,
    categoryId,
    category,
    description,
    showing,
    setShowing,
}: Props) {
    type Data = {
        name: string;
        price: number;
        categoryId: string;
        category: string;
        description: string;
    };
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Data>({
        mode: 'all',
        defaultValues: {
            name: name,
            price: price,
            category: [categoryId, category].join(),
            categoryId: categoryId,
            description: description,
        },
    });
    const onSubmit = async (data: Data) => {
        data.categoryId = data.category[0];
        data.category = data.category.substring(2, data.category.length);
        console.log(data);
    };
    return (
        <form className='w-full space-y-5' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Tên sản phẩm</label>
                <div className='mt-2'>
                    <input
                        type='text'
                        {...register('name', {
                            required: true,
                        })}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        required
                        className={
                            'border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                        }
                    />
                    {errors.name?.type === 'required' && (
                        <p role='alert' className='text-sm text-red-500'>
                            Vui lòng nhập tên sản phẩm
                        </p>
                    )}
                </div>
            </div>
            <div>
                <label>Giá sản phẩm</label>
                <div className='mt-2'>
                    <input
                        type='number'
                        {...register('price', {
                            required: true,
                            min: 0,
                        })}
                        aria-invalid={errors.price ? 'true' : 'false'}
                        required
                        className={
                            'border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
                        }
                    />
                    {errors.price?.type === 'required' && (
                        <p role='alert' className='text-sm text-red-500'>
                            Vui lòng nhập giá sản phẩm
                        </p>
                    )}
                    {errors.price?.type === 'min' && (
                        <p role='alert' className='text-sm text-red-500'>
                            Giá không hợp lệ
                        </p>
                    )}
                </div>
            </div>
            <div>
                <label>Danh mục</label>
                <div className='mt-2'>
                    <select
                        {...register('category', {
                            required: true,
                        })}
                        defaultValue={''}
                    >
                        <option value=''>Chọn một danh mục</option>
                        <option value={['1', 'Laptop']}>Laptop</option>
                        <option value={['2', 'Điện thoại']}>Điện thoại</option>
                        <option value={['3', 'Phụ kiện']}>Phụ kiện</option>
                    </select>
                    {errors.category?.type === 'required' && (
                        <p role='alert' className='text-sm text-red-500'>
                            Vui lòng chọn danh mục sản phẩm
                        </p>
                    )}
                </div>
            </div>
            <div>
                <label>Mô tả sản phẩm</label>
                <div className='mt-2'>
                    <textarea
                        {...register('description', {
                            required: true,
                        })}
                        className='resize-vertical px-2 py-2 w-full'
                    ></textarea>
                    {errors.description?.type === 'required' && (
                        <p role='alert' className='text-sm text-red-500'>
                            Vui lòng nhập mô tả sản phẩm
                        </p>
                    )}
                </div>
            </div>
            <button
                type='submit'
                className='bg-blue-500 rounded-md text-white hover:bg-blue-700 px-2 py-2'
                onClick={() => {
                    // Luu thay doi san pham
                    if (setShowing) setShowing(false);
                }}
            >
                {name ? 'Lưu' : 'Thêm sản phẩm'}
            </button>
            {name && (
                <button
                    className='bg-white rounded-md text-black hover:bg-gray-100 px-2 py-2 ms-5 outline outline-1 outline-gray-500'
                    onClick={() => {
                        if (setShowing) setShowing(false);
                    }}
                >
                    Hủy
                </button>
            )}
        </form>
    );
}