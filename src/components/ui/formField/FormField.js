function FormField({ children, label, htmlFor, hasError, errorMessage, hasHint, hintMessage }) {
    return (
      <div className="form-field">
        <label htmlFor={htmlFor}>{label}</label>
        {children}
        {hasError && errorMessage ?
          <p className="error" data-testid="error-message">{errorMessage}</p> : null}
          {hasHint ?
            <details className="hint" data-hint-id="hint-message">
              <summary>Hint</summary>
              {hintMessage}
            </details> : null}
      </div>
    );
  };
export default FormField;