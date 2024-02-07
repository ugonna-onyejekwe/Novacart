export const Change_password = () => {
    return <div className="change_pass">
        <h3>change password</h3>
        <div className="input_con">
            <input type="text" placeholder="Current Password" />
            <input type="text" placeholder="New Password" />
            <input type="text" placeholder="Confirm Password" />

            <button>save</button>
        </div>
    </div>
}