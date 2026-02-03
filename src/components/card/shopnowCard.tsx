import Button from '../button/cartButton';

interface ShopnowCardProps {
    id: string;
    heading: string;
    bgImageSrc: string;
    bgColor?: string;
}

const ShopnowCard = (data: ShopnowCardProps) => {
  return (
    <div
      className='w-full h-[236px] flex flex-col justify-center items-left gap-4 p-4 rounded-lg' 
        style={{
          backgroundImage: `url(${data.bgImageSrc})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          }
          }
    >
      <h2 className='font-heading text-2xl max-w-56 p-2.5'>{data.heading}</h2>
      <Button
        variant='darkgreen'
        size='mdmin'
        className="justify-start md:p-2 font-lato"
      >
        Shop Now  
      </Button>
    </div>
  )
}

export default ShopnowCard