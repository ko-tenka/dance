import './Card.css';
import { IPost } from '../../types/types';
import { useAppDispatch } from '../../redux/hook';
import { fetchDeletePost } from '../../redux/thunkActions';
import { useAppSelector } from '../../redux/hook';
// import { ContextAll } from '../../context/context'
export type PostPropsType = {
  post: IPost;
};

export default function Card({ post }: PostPropsType): JSX.Element {
  // console.log('Card')
  // const { delHandler } = useContext(ContextAll)

  const user = useAppSelector((store) => store.userSlice.user)

  const dispatch = useAppDispatch();

  const deleteHandler = async (): Promise<void> => {
    void dispatch(fetchDeletePost(post.id));
  };



//   const imageUrl = post.img && typeof post.img === 'string' ? 
//   (post.img.includes('http') ? post.img : `http://localhost:3000/images/${post.img}`): "../../../public/zap.jpg";


// console.log('Приход в посте |||||||||||',post.img)





const baseUrl = "http://localhost:3000/images/";
const defaultImageUrl = "/zap.jpg";

let imagePath = "";

if (post.img && typeof post.img === 'object' && post.img.type === 'Buffer') {
  const buffer = new Uint8Array(post.img.data);
  const decoder = new TextDecoder('utf8');
  imagePath = decoder.decode(buffer);
}

const imageUrl = imagePath ? 
  (imagePath.includes('http') ? imagePath : `${baseUrl}${imagePath}`) : 
  defaultImageUrl;

console.log("Final image URL:", imageUrl);

  return (
    <div className="myCard">
                
      <img
        className="imgFormat"
        alt="avatar"
        src={imageUrl}
      />
      

      {post.title ? <h3 className='title'>{post.title}</h3> : <h3>Нет тайтла</h3>}
      {post.description ? <h3 className='description'>{post.description}</h3> : <h3>Нет текста</h3>}
      {/* {post.check1 ? <h3>ДА</h3> : <h3>НЕТ</h3>} */}
      {user.login? (      <button className='BtnCardDelete'  onClick={() => deleteHandler()}>Удалить</button>):(<></>)}

    </div>
  );
}

