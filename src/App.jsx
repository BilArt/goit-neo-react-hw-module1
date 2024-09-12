import Profile from "./components/task1/profile";
import FriendList from "./components/task2/friend_list";
import userData from "./userData.json";
import friends from "./friends.json";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
