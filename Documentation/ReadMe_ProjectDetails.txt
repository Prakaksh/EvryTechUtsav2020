Create the solution under src folder using ---> dotnet new sln -n EvryTechUstav2020


create the Web Api project --->> dotnet new webapi

create the angular project
Web Project Creation -->> dotnet new angular   -- >> ClientApp/ --> npm install 
Web1 Project Creation -->> dotnet new angular  -->> ClientApp/ --> npm install 


\Src\Core\EvryIDS.Application>dotnet new classlib
\Src\Core\EvryIDS.Domain>dotnet new classlib
\Src\Infrastructure\EvryIDS.Persistence>dotnet new classlib
\Src\Infrastructure\EvryIDS.Infrastructure>dotnet new classlib

add project to solutions using below command
============================================
dotnet sln EvryTechUstav2020.sln add C:\Src\EvryIDS.Application\EvryIDS.Application.csproj
dotnet sln EvryTechUstav2020.sln add C:\Src\EvryIDS.Domain\EvryIDS.Domain.csproj
dotnet sln EvryTechUstav2020.sln add C:\Src\Infrastructure\EvryIDS.Infrastructure\EvryIDS.Infrastructure.csproj
dotnet sln EvryTechUstav2020.sln add C:\Src\Infrastructure\EvryIDS.Persistence\EvryIDS.Persistence.csproj


dotnet add EvryIDS.Api.csproj reference C:\Src\Core\EvryIDS.Application\EvryIDS.Application.csproj
dotnet add EvryIDS.Application.csproj reference C:\Src\Core\EvryIDS.Domain\EvryIDS.Domain.csproj
dotnet add EvryIDS.Application.csproj reference C:\Src\Infrastructure\EvryIDS.Persistence\EvryIDS.Persistence.csproj
dotnet add EvryIDS.Persistence.csproj  reference C:\Src\Core\EvryIDS.Domain\EvryIDS.Domain.csproj



Installed PlugIn
======================================
dotnet add package Swashbuckle.AspNetCore --version 5.6.3
Microsoft.AspNetCore..JwtBearer
Microsoft.AspNetCore.Identity
Microsoft.AspNetCore.Identity.EntityFramworkCore
Microsoft.AspNetCore.Identity.EntityFramworkCore

Persistence ClassLib
==================================================================
dotnet add package System.Data.SqlClient --version 4.8.2
dotnet add package Microsoft.Extensions.Configuration.Json --version 5.0.0
dotnet add package Microsoft.Extensions.Configuration --version 5.0.0
dotnet add package Dapper --version 2.0.78


Agnular Command for Component generate
========================================
ng g c login --skip-import

ng g m app-routing --flat

https://localhost:5001/swagger/index.html


Usefull Resource 
=====================
https://www.youtube.com/watch?v=wd5RQfrnaUU