const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Push your limits with our expertly designed workout sessions at
          Gym-Life. Get stronger, fitter, and healthier.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Join Our Most Popular Bootcamp Sessions and Achieve Your Fitness Goals with Gym-Life.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Core & Abs Bootcamp</h4>
            <p>
            Strengthen your core and sculpt your abs with targeted exercises. This bootcamp focuses on stability, posture, and toning the midsection to achieve a defined and strong core.
            </p>
          </div>
          <div>
            <h4>Cardio Burn Bootcamp</h4>
            <p>
            Boost your cardiovascular health and endurance while burning fat. This bootcamp includes running, cycling, jump rope, and other cardio exercises to help you shed pounds and build stamina.
            </p>
          </div>
          <div>
            <h4> Yoga & Flexibility Bootcamp</h4>
            <p>
            Improve flexibility, balance, and mental focus through yoga and stretching. Ideal for reducing stress, enhancing mobility, and boosting overall well-being.
            </p>
          </div>
          <div>
            <h4>Bootcamp for Beginners</h4>
            <p>
            If you are new to fitness or returning after a break, this beginner-friendly bootcamp offers low-impact exercises and gradual progression.
            </p>
          </div>
          <div>
            <h4>Advanced Athlete Bootcamp</h4>
            <p>
            Designed for seasoned athletes or those looking to push their limits, this bootcamp features challenging exercises to enhance performance, agility, and explosive power.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
