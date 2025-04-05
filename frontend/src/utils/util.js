export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.trim().split(/\s+/); 
  let initials = "";
  let n = ""

  if (words.length === 1) {
    const single = words[0];
    n = words[0];
    if (single.length >= 2) {
      initials = single[0] + single[single.length - 1];
    } else {
      initials = single[0]; 
    }
  } else {
    n = words[0] +  " " + words[words.length - 1]
    initials = words[0][0] + words[words.length - 1][0];
  }
  



  return {    initials: initials.toUpperCase(),
    name: n
  };
};




