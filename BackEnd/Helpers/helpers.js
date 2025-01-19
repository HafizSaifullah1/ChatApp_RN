const setResponse = (isSuccessful, data, message) => {

    return {

        success: isSuccessful,
        message: message,
        data: data
    }

}

const send200 = (res, data, message) => {

  return  res.status(200).json(setResponse(
    isSuccessful, 
    data,
    message

));
}

module.exports = { setResponse ,send200};