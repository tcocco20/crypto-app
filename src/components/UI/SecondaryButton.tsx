import { type ComponentPropsWithoutRef } from "react";

interface SecondaryButtonProps extends ComponentPropsWithoutRef<"button"> {
  cancelButton?: boolean;
}

const SecondaryButton = (props: SecondaryButtonProps) => {
  const { cancelButton, className, children, ...rest } = props;
  const styles = {
    deleteStyles: "bg-red-700 text-white",
    cancelStyles: "bg-white dark:bg-violet-900/50",
  };
  return (
    <button
      {...rest}
      className={`p-2 text-center w-full rounded hover:opacity-70 active:opacity-50 ${className} ${
        cancelButton ? styles.cancelStyles : styles.deleteStyles
      }`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
