import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    disabled?: boolean
}

export default function Input(props: Partial<InputProps>) {
  const { label, disabled, ...nativeProps } = props;
  return (
        <>
            <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
                {label}
            </label>
            <input
              type="text"
              className="form-control rounded-pill text-lg"
              id="name"
              name="name"
              aria-describedby="name"
              placeholder="Enter your name"
              disabled={disabled}
              {...nativeProps}
            />
        </>
  );
}