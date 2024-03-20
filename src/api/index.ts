const BASE_URL = 'https://auth-qa.qencode.com/v1/auth';

export const loginUser = async (email: string, password: string): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'An error occurred');
    }

    return await response.json();
  } catch (error) {
    throw new Error((error as Error).message || 'An error occurred');
  }
};

export const resetPassword = async (email: string): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'An error occurred');
    }

    return await response.json();
  } catch (error) {
    throw new Error((error as Error).message || 'An error occurred');
  }
};

export const setPassword = async (
  password: string,
  token: string | null,
  secret: string | null,
  confirmPassword: string
): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/password-set`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, token, secret, confirmPassword }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      throw new Error(errorData.detail[0].error || 'An error occurred');
    }

    return await response.json();
  } catch (error) {
    throw new Error((error as Error).message || 'An error occurred');
  }
};
