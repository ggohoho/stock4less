import Image, { ImageProps } from 'next/image'

const Logo = ({ className = '', ...props }) => (
  <Image
                quality="85"
                src='https://cdn11.bigcommerce.com/s-il8tmlzhpf/images/stencil/228x59/stock4less-large_1623702090__46881.original.png'
                alt='Product Image'
                height={30}
                width={180}
                layout="fixed"
              />

)

export default Logo
