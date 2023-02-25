import { getCurrentProfile } from "../../actions/profile";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const Dashboard = ({getCurrentProfile,auth,profile}) => {
    useEffect(()=>{
        getCurrentProfile()
    },[])
  return <div>Dashboard skjdakdk Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit fugiat tempora praesentium. Quos dicta, id molestiae non minus distinctio placeat magni sint accusamus nemo, nulla voluptatem, nam officia laboriosam? </div>;
};
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile:PropTypes.object.isRequired
};
const mapStateToProps =(state)=>({
auth:state.auth,
profile:state.profile
})
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
