const followers = document.querySelectorAll(".followers");

followers.forEach((followersCounter) => {
  followersCounter.innerHTML = "0";

  const updateFollowersCounter = () => {
    const target = +followersCounter.getAttribute("data-target");
    const count = +followersCounter.innerText;

    const increment = target / 500;

    if (count < target) {
      followersCounter.innerHTML = `${Math.ceil(count + increment)}`;
      setTimeout(updateFollowersCounter, 1);
    } else {
      followersCounter.innerText = target;
    }
  };
  updateFollowersCounter();
});
