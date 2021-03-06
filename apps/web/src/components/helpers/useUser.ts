import {toRefs, reactive, ref} from "vue";

type Role = "USER" | "MANAGER" | "ADMIN";

type LoginData = {
  email: string;
  password: string;
}

const isLoggedIn = ref(false);

export const useUser = () => {

  const state = reactive({
    email: '',
    role: '' as Role,
  });

  const login = async (data: LoginData) => {
    try {
      return await fetch('http://localhost:3000/users', {
        body: JSON.stringify(data)
      })
        .then(res => {
          res.json()
          isLoggedIn.value = true
        })
    } catch (err) {
      console.error(err);
      throw new Error(err.response?.data?.message);
    }
  }

  return {
    ...toRefs(state),
    login
  }
}
