using System.Numerics;
using BackEnd.Models;
using BackEnd.Controllers;
using Moq;
using FluentAssertions;
using FluentAssertions.Data;

namespace BackEnd.xUnitTest.Controllers
{
    public class Test_GWEmployees
    {
        [Fact]
        public void getEmployees_ONSuccessReturnsStatusCode200()
        {
            //Arrange 

            //Act

            //Assert
        }
  
        // Test for various employee IDs 
        [Theory]
        [InlineData(1)]
        [InlineData(2)]
        [InlineData(3)]
        public void getEmployeeById_ONSuccessReturnsStatusCode200(int id)
        {

        }
     
    }
}