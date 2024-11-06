import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
<<<<<<< HEAD
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentsReducer from "./Courses/reducer";
import accountReducer from "./Account/reducer";
=======
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import enrollmentReducer from "./enrollmentReducer"
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
<<<<<<< HEAD
    assignmentsReducer,
    enrollmentsReducer,
  },
});
export default store;
=======
    assignmentReducer,
    enrollmentReducer,
  },
});
export default store;
>>>>>>> acc68c40b3ca5e785466cdbed79e85c75074fb3a
