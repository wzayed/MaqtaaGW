﻿using BackEnd.Controllers;
using BackEnd.Models;

namespace BackEnd.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(Employee emp);
      
    }
}
