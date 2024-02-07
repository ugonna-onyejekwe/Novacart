export const Logout = () => {
    return (
      <div className="logout_section">
        <h3>logout</h3>

        <div className="con">
          <div className="modal">
            Are you sure you want to log out?
            <div className="action_btn">
              <button>yes</button>
              <button>no</button>
            </div>
          </div>
        </div>
      </div>
    );
}