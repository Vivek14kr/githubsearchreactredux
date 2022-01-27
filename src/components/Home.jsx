import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { getUserSuccess } from "../Redux/Search/action";
const Home = () => {
  const [search, setSearch] = useState("");
const dispatch = useDispatch();

const {data} = useSelector(state=>state.searchState)
  const handleClick = () => {
    getUsers()
  };
  const getUsers = () => {
  
    fetch(
      `https://api.github.com/search/users?q=${search}`
    )
      .then((res) => res.json())
      .then((res) => {


      dispatch(getUserSuccess(res.items))
        
      });
  };

  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          name="search"
          placeholder="Search Profile"
        />
        <button onClick={handleClick}>Search</button>
      </div>
      {data.map((e) => (
        <div >
          <div>
            <img src={e.avatar_url} alt="" />
          </div>
          <div  className="textbox">
            <p >Username : {e.login}</p>
            <a href={e.html_url}>
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
